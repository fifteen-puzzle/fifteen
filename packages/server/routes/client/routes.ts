export enum CLIENT_ROUTES {
  MAIN = '/',
  SIGNUP = '/signup',
  AUTH = '/auth',
  GAME_FIELD = '/game-field',
  LEADERS = '/leaders',
  PROFILE = '/profile',
  EDIT_PROFILE = '/edit-profile',
  EDIT_PASSWORD = '/edit-password',
  FORUM = '/forum',
  RULES = '/rules',
  NOT_FOUND = '/not-found',
}

export const PRIVATE_CLIENT_ROUTES = [
  CLIENT_ROUTES.MAIN,
  CLIENT_ROUTES.GAME_FIELD,
  CLIENT_ROUTES.LEADERS,
  CLIENT_ROUTES.PROFILE,
  CLIENT_ROUTES.EDIT_PROFILE,
  CLIENT_ROUTES.EDIT_PASSWORD,
  CLIENT_ROUTES.FORUM,
  CLIENT_ROUTES.RULES
];

export const PUPLIC_CLIENT_ROUTES = [
  CLIENT_ROUTES.SIGNUP,
  CLIENT_ROUTES.AUTH
];