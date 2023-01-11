const ACTIONS = {
    CHANGE_READ_STATE: 'change-read-state',
    GLOBAL_CHAT: 0,
    GROUP_CHAT: 1,
    DM_CHAT: 2,
    YGG_CHAT: 3,
    TYPING_STATE: 'typing-state',
    INVITE_TO_FRIEND: 'invite-to-friend',
    CHANGE_SLIDE: 'CHANGE_SLIDE',
    GET_GROUP_MSGS: 'get-group-msgs',
    REMOVE_USER_EXTENSION: 'remove-user-extension',
    SEND_MSG_EXTENSION: 'send-msg-extension',
    ADD_USER_EXTENSION: 'add-user-extension',
    USER_INFO_EXTENSION: 'user-info-extension',
    JOIN_EXTENSION: 'join-extension',
    DUPLICATION_INVITATION: 'duplication-invitation',
    GET_INVITATIONS: 'get-invitations',
    DENY_INVITATION: 'deny-invitation',
    ACEEPT_INVITATION: 'accept-invitation',
    GET_INVITATION: 'get-invitation',
    SET_USER_NAME: 'set-user-name',
    INVITE_FRIEND: 'invite-friend',
    GET_USERS: 'get-users',
    ROOM_READY: 'room-ready',
    ROOM_LIST: 'room-list',
    CREATE_ROOM: 'create-room',
    SEND_MSG: 'send-msg',
    JOIN: 'join',
    LEAVE: 'leave',
    ADD_PEER: 'add-peer',
    REMOVE_PEER: 'remove-peer',
    RELAY_ICE: 'relay-ice',
    RELAY_SDP: 'relay-sdp',
    SESSION_DESCRIPTION: 'session-description',
    ICE_CANDIDATE: 'ice-candidate',
    MUTE: 'mute',
    UNMUTE: 'unmute',
};

export default ACTIONS;
