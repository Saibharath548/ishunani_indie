import { THEME, applyElementTheme } from 'public/theme';
import { PROFILE_DATA } from 'public/portfolioData';

$w.onReady(function () {
  initTheme();
  renderContactContent();
});

function initTheme() {
  try {
    if ($w('#page1')) applyElementTheme($w('#page1'), { backgroundColor: THEME.colors.aubergineDark });
    if ($w('#Section1Regular')) applyElementTheme($w('#Section1Regular'), { backgroundColor: THEME.colors.aubergineDark });
  } catch (e) {}

  const columns = ['#section1col1', '#section1col2', '#section1col3'];
  columns.forEach(col => {
    try {
      if ($w(col)) {
        applyElementTheme($w(col), {
          backgroundColor: THEME.colors.aubergineSurface,
          borderColor: THEME.colors.iceSilverBorder,
          borderWidth: '1px'
        });
      }
    } catch (e) {}
  });
}

function renderContactContent() {
  // Page Title
  try {
    if ($w('#text92')) {
      $w('#text92').html = `
        <div style="font-family: ${THEME.fonts.heading}; text-align: center; margin-bottom: 24px;">
          <span style="color: ${THEME.colors.marigoldPrimary}; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">Get in Touch</span>
          <h1 style="font-size: 40px; font-weight: 800; color: ${THEME.colors.iceSilverHeading}; margin: 8px 0 12px 0;">Let's Collaborate</h1>
          <p style="font-size: 16px; color: ${THEME.colors.iceSilverMuted}; max-width: 600px; margin: 0 auto;">
            Have a game project, contract opportunity, or creative idea? Reach out directly.
          </p>
        </div>
      `;
    }
  } catch (e) {}

  // Contact Method 1: Email
  try {
    if ($w('#text1')) {
      $w('#text1').html = `
        <h3 style="font-family: ${THEME.fonts.heading}; font-size: 18px; font-weight: 700; color: ${THEME.colors.iceSilverHeading}; margin: 0 0 6px 0;">Direct Email</h3>
      `;
    }
    if ($w('#text2')) {
      $w('#text2').html = `
        <p style="font-family: ${THEME.fonts.body}; font-size: 15px; color: ${THEME.colors.marigoldPrimary}; font-weight: 600; margin: 0;">
          hello@ishunani.dev
        </p>
      `;
    }
  } catch (e) {}

  // Contact Method 2: GitHub & Code
  try {
    if ($w('#text3')) {
      $w('#text3').html = `
        <h3 style="font-family: ${THEME.fonts.heading}; font-size: 18px; font-weight: 700; color: ${THEME.colors.iceSilverHeading}; margin: 0 0 6px 0;">Code Repositories</h3>
      `;
    }
    if ($w('#text4')) {
      $w('#text4').html = `
        <p style="font-family: ${THEME.fonts.body}; font-size: 15px; color: ${THEME.colors.iceSilverBody}; margin: 0;">
          github.com/Saibharath548
        </p>
      `;
    }
  } catch (e) {}

  // Contact Method 3: Availability
  try {
    if ($w('#text5')) {
      $w('#text5').html = `
        <h3 style="font-family: ${THEME.fonts.heading}; font-size: 18px; font-weight: 700; color: ${THEME.colors.iceSilverHeading}; margin: 0 0 6px 0;">Current Status</h3>
      `;
    }
    if ($w('#text6')) {
      $w('#text6').html = `
        <p style="font-family: ${THEME.fonts.body}; font-size: 15px; color: ${THEME.colors.marigoldPrimary}; font-weight: 600; margin: 0;">
          ${PROFILE_DATA.statusBadge}
        </p>
      `;
    }
  } catch (e) {}
}
