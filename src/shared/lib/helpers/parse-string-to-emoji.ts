const colorEmojis: Record<string, string> = {
  red: '🔴',
  blue: '🔵',
  green: '🟢',
  yellow: '🟡',
  orange: '🟠',
  purple: '🟣',
  black: '⚫️',
  white: '⚪️',
  brown: '🟤',
  pink: '🌸',
  gray: '⚪️',
  grey: '⚪️',
};

const getEmojiFromText = (color: string) =>
  colorEmojis[color.trim().toLowerCase()] ?? color;

export const parseStringToEmoji = (colors: string) =>
  colors.split('/').map(getEmojiFromText).join(' / ');
