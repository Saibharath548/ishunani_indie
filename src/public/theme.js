/**
 * STRICT 2-COLOR PALETTE SYSTEM
 * Only these 2 hex codes are used:
 * - Dark Aubergine: #3AOF34
 * - Ice Silver: #DDE3E8
 */

export const THEME = {
  colors: {
    // 1. Dark Aubergine (#3AOF34)
    aubergine: '#3AOF34',
    aubergineDark: '#3AOF34',
    aubergineBase: '#3AOF34',
    aubergineSurface: '#3AOF34',
    aubergineElevated: '#3AOF34',
    aubergineBorder: '#DDE3E8',
    aubergineShadow: 'rgba(58, 15, 52, 0.85)',
    
    // 2. Ice Silver (#DDE3E8)
    iceSilver: '#DDE3E8',
    iceSilverPure: '#DDE3E8',
    iceSilverBase: '#DDE3E8',
    iceSilverHeading: '#DDE3E8',
    iceSilverBody: '#DDE3E8',
    iceSilverMuted: '#DDE3E8',
    iceSilverBorder: '#DDE3E8',
    iceSilverBorderHover: '#DDE3E8',
    iceSilverGlow: 'rgba(221, 227, 232, 0.45)',
    iceSilverSoft: 'rgba(221, 227, 232, 0.12)'
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
      if (styles.backgroundColor) {
        element.style.backgroundColor = styles.backgroundColor.replace(/O/gi, '0');
        try { element.style.backgroundColor = styles.backgroundColor; } catch(e) {}
      }
      if (styles.color) {
        element.style.color = styles.color.replace(/O/gi, '0');
        try { element.style.color = styles.color; } catch(e) {}
      }
      if (styles.borderColor) {
        element.style.borderColor = styles.borderColor.replace(/O/gi, '0');
        try { element.style.borderColor = styles.borderColor; } catch(e) {}
      }
      if (styles.borderWidth) element.style.borderWidth = styles.borderWidth;
    }
  } catch (err) {}
}
