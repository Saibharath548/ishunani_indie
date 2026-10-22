import { THEME, formatHtmlHeading, formatHtmlParagraph, applyElementTheme } from 'public/theme';
import { PROFILE_DATA } from 'public/portfolioData';

$w.onReady(function () {
  initGlobalHeader();
  initGlobalFooter();
});

function initGlobalHeader() {
  // Brand Logo / Title
  try {
    if ($w('#text91')) {
      $w('#text91').html = `
        <div style="font-family: ${THEME.fonts.heading}; font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: ${THEME.colors.iceSilverHeading};">
          ${PROFILE_DATA.name.split(' ')[0]}<span style="color: ${THEME.colors.marigoldPrimary}; font-weight: 900;">.</span><span style="color: ${THEME.colors.iceSilverMuted}; font-size: 15px; font-weight: 500;">dev</span>
        </div>
      `;
    }
  } catch (e) {
    // Graceful fallback
  }

  // Header background theme
  try {
    if ($w('#header1')) {
      applyElementTheme($w('#header1'), {
        backgroundColor: THEME.colors.aubergineDark
      });
    }
  } catch (e) {}
}

function initGlobalFooter() {
  try {
    if ($w('#footer1')) {
      applyElementTheme($w('#footer1'), {
        backgroundColor: THEME.colors.aubergineDark
      });
    }
  } catch (e) {}
}
