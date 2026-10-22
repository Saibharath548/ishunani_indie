/**
 * STRICT 3-COLOR THEME SYSTEM
 * - Deep Aubergine (Primary Dark Plum Canvas & Card Surfaces)
 * - Ice Silver (Frosty Metallic Typography & Glass Borders)
 * - Marigold (Radiant Golden Accents, Buttons & Focal Highlights)
 */

export const THEME = {
  colors: {
    // 1. Deep Aubergine (Rich purple-plum tones, never black)
    aubergineDark: '#20063B',       // Canvas & primary page background
    aubergineSurface: '#2D0B52',    // Bento card surfaces & containers
    aubergineElevated: '#3A1068',   // Hover cards & active containers
    aubergineBorder: '#5C1FA2',     // Aubergine separation borders
    aubergineShadow: 'rgba(32, 6, 59, 0.7)',
    
    // 2. Ice Silver (Frosty metallic icy silver tones, never generic gray or white)
    iceSilverPure: '#E8F2FC',       // Pure icy silver emphasis
    iceSilverHeading: '#CFE2F4',    // Main headings & titles
    iceSilverBody: '#B0CCE5',       // Cool frosted silver body text
    iceSilverMuted: '#88A9C8',      // Metallic icy silver metadata & tags
    iceSilverBorder: 'rgba(207, 226, 244, 0.3)', // Frosted glass silver outline
    iceSilverBorderGlow: 'rgba(207, 226, 244, 0.6)',
    
    // 3. Marigold (Golden amber flower bloom)
    marigoldPrimary: '#FFB300',     // Vibrant golden marigold
    marigoldWarm: '#FFA000',        // Deep marigold for buttons/pills
    marigoldGlow: 'rgba(255, 179, 0, 0.5)',
    marigoldSoft: 'rgba(255, 179, 0, 0.18)'
  },
  
  fonts: {
    heading: "'Poppins', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono: "'JetBrains Mono', monospace"
  }
};

/**
 * Generates HTML text styled strictly with Deep Aubergine, Ice Silver, and Marigold
 */
export function formatHtmlHeading(text, level = 2, highlightText = '', highlightColor = THEME.colors.marigoldPrimary) {
  const content = highlightText && text.includes(highlightText)
    ? text.replace(highlightText, `<span style="color: ${highlightColor}; font-weight: 800;">${highlightText}</span>`)
    : text;

  const fontSizes = {
    1: '38px',
    2: '28px',
    3: '22px',
    4: '18px'
  };

  return `<h${level} style="margin: 0; font-family: ${THEME.fonts.heading}; font-size: ${fontSizes[level] || '24px'}; color: ${THEME.colors.iceSilverHeading}; font-weight: 700; line-height: 1.2;">${content}</h${level}>`;
}

export function formatHtmlParagraph(text, isMuted = false) {
  const color = isMuted ? THEME.colors.iceSilverMuted : THEME.colors.iceSilverBody;
  return `<p style="margin: 0; font-family: ${THEME.fonts.body}; font-size: 15px; color: ${color}; line-height: 1.6;">${text}</p>`;
}

export function formatHtmlBadge(label, isMarigold = false) {
  const bg = isMarigold ? THEME.colors.marigoldSoft : 'rgba(207, 226, 244, 0.1)';
  const color = isMarigold ? THEME.colors.marigoldPrimary : THEME.colors.iceSilverHeading;
  const border = isMarigold ? `1px solid ${THEME.colors.marigoldPrimary}` : `1px solid ${THEME.colors.iceSilverBorder}`;
  
  return `<span style="display: inline-block; padding: 4px 10px; border-radius: 9999px; background: ${bg}; border: ${border}; color: ${color}; font-size: 12px; font-weight: 600; font-family: ${THEME.fonts.heading}; letter-spacing: 0.5px;">${label}</span>`;
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
