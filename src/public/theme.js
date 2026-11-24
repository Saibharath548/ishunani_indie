/**
 * Strict two-color theme: Pale Sage Ivory and Muted Forest Sage.
 * Every theme color resolves to one of these two values.
 */
const IVORY = '#E5E8CE';
const SAGE = '#789575';

export const THEME = {
  colors: {
    ivory: IVORY, sage: SAGE, background: IVORY, surface: IVORY, card: IVORY,
    elevated: IVORY, text: SAGE, heading: SAGE, body: SAGE, muted: SAGE,
    border: SAGE, accent: SAGE, shadow: SAGE, soft: IVORY, marigoldPrimary: SAGE,
    jetBlack: IVORY, blackSurface: IVORY, blackCard: IVORY, blackElevated: IVORY,
    blackShadow: SAGE, ceruleanBlue: SAGE, ceruleanPrimary: SAGE,
    ceruleanBorder: SAGE, ceruleanBorderHover: SAGE, ceruleanGlow: SAGE,
    ceruleanSoft: IVORY, neonRose: SAGE, neonRoseGlow: SAGE, neonRoseSoft: IVORY,
    aubergineDark: IVORY, aubergineBase: IVORY, aubergineSurface: IVORY,
    aubergineElevated: IVORY, aubergineBorder: SAGE, aubergineShadow: SAGE,
    iceSilverPure: SAGE, iceSilverBase: SAGE, iceSilverHeading: SAGE,
    iceSilverBody: SAGE, iceSilverMuted: SAGE, iceSilverBorder: SAGE,
    iceSilverBorderHover: SAGE, iceSilverGlow: SAGE, iceSilverSoft: IVORY
  },
  fonts: {
    heading: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', monospace"
  }
};

export function formatHtmlHeading(text, level = 2, highlightText = '', highlightColor = THEME.colors.iceSilverBase) {
  const content = highlightText && text.includes(highlightText)
    ? text.replace(highlightText, `<span style="color: ${highlightColor}; font-weight: 800;">${highlightText}</span>`)
    : text;
  const fontSizes = { 1: '38px', 2: '28px', 3: '22px', 4: '18px' };
  return `<h${level} style="margin: 0; font-family: ${THEME.fonts.heading}; font-size: ${fontSizes[level] || '24px'}; color: ${THEME.colors.iceSilverBase}; font-weight: 700; line-height: 1.2;">${content}</h${level}>`;
}

export function formatHtmlParagraph(text, isMuted = false) {
  const color = isMuted ? THEME.colors.iceSilverMuted : THEME.colors.iceSilverBody;
  return `<p style="margin: 0; font-family: ${THEME.fonts.body}; font-size: 15px; color: ${color}; line-height: 1.6;">${text}</p>`;
}

export function formatHtmlBadge(label) {
  return `<span style="display: inline-block; padding: 4px 12px; border-radius: 9999px; background: ${THEME.colors.iceSilverSoft}; border: 1px solid ${THEME.colors.iceSilverBorder}; color: ${THEME.colors.iceSilverBase}; font-size: 12px; font-weight: 600; font-family: ${THEME.fonts.heading}; letter-spacing: 0.5px;">${label}</span>`;
}

export function applyElementTheme(element, styles = {}) {
  if (!element) return;
  try {
    if (element.style) {
      if (styles.backgroundColor) element.style.backgroundColor = styles.backgroundColor;
      if (styles.color) element.style.color = styles.color;
      if (styles.borderColor) element.style.borderColor = styles.borderColor;
      if (styles.borderWidth) element.style.borderWidth = styles.borderWidth;
    }
  } catch (err) {}
}
