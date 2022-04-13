import axios from "axios";
import {
  successResponse,
  errorResponse,
  throwError,
  getDiscordUser,
} from "../../../helpers";
import UserModel from "../../User/model";

export const linkAccountController = async (req, res) => {
  try {
    let profile = await req.profile();
    const { _id } = profile;
    const { code, link } = req.body;
    switch (link) {
      case "discord":
        await linkDiscord(String(_id), code);
        break;
      case "twitter":
        throwError("Twitter connection not yet available");
        break;
    }
    profile = await req.profile();
    return successResponse({ res, response: { profile } });
  } catch (err) {
    return errorResponse({ res, err });
  }
};

const linkDiscord = async (userId, code) => {
  const getAccessCode = async () => {
    let data = {
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      scope: "identity",
      redirect_uri:
        process.env.PRODUCTION === "true"
          ? "https://solarity-web-git-master-hassan-sk.vercel.app/profile?view=link_accounts"
          : "http://localhost:3000/profile?view=link_accounts&link=discord",
    };
    const params = new URLSearchParams(data);
    let headers = {
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const { data: response } = await axios.post(
      "https://discord.com/api/oauth2/token",
      params,
      {
        headers,
      }
    );
    return response;
  };
  const data = await getAccessCode();
  const { access_token: accessToken, refresh_token: refreshToken } = data;
  const user = await getDiscordUser(accessToken);
  await UserModel.updateOne(
    { _id: userId },
    {
      "externalLinks.discord.username": user.username,
      "externalLinks.discord.accessToken": accessToken,
      "externalLinks.discord.refreshToken": refreshToken,
      "externalLinks.discord.connected": true,
    }
  );
};
