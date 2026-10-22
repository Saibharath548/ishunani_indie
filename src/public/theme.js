/**
 * STRICT 2-COLOR DUAL-TONE THEME SYSTEM
 * - Deep Aubergine: #3A0F34 (Base, Surfaces, Cards)
 * - Ice Silver: #DDE3E8 (Typography, Borders, Buttons, Active Highlights)
 */

export const THEME = {
  colors: {
    // 1. Deep Aubergine Spectrum
    aubergineDark: '#260A22',       // Canvas & primary page background
    aubergineBase: '#3A0F34',       // Exact user Deep Aubergine
    aubergineSurface: '#44133D',    // Bento card surfaces & containers
    aubergineElevated: '#52174A',   // Hover cards & active containers
    aubergineBorder: '#631D5A',     // Aubergine separation borders
    aubergineShadow: 'rgba(38, 10, 34, 0.75)',
    
    // 2. Ice Silver Spectrum
    iceSilverPure: '#F0F4F8',       // Pure luminous silver emphasis
    iceSilverBase: '#DDE3E8',       // Exact user Ice Silver
    iceSilverBody: '#C4D0DB',       // Frosted silver readable text
    iceSilverMuted: '#9DB0C2',      // Metallic silver metadata & tags
    iceSilverBorder: 'rgba(221, 227, 232, 0.35)', // Frosted glass silver outline
    iceSilverBorderHover: 'rgba(221, 227, 232, 0.75)',
    iceSilverGlow: 'rgba(221, 227, 232, 0.45)',
    iceSilverSoft: 'rgba(221, 227, 232, 0.15)'
  },
  
  fonts: {
    heading: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', monospace"
  }
};

/**
 * Generates HTML text styled strictly with Deep Aubergine and Ice Silver
 */
export function formatHtmlHeading(text, level = 2, highlightText = '', highlightColor = THEME.colors.iceSilverBase) {
  const content = highlightText && text.includes(highlightText)
    ? text.replace(highlightText, `<span style="color: ${highlightColor}; font-weight: 800; text-shadow: 0 0 15px ${THEME.colors.iceSilverGlow};">${highlightText}</span>`)
    : text;

  const fontSizes = {
    1: '38px',
    2: '28px',
    3: '22px',
    4: '18px'
  };

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
