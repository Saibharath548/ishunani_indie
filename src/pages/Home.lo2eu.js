import { THEME, applyElementTheme } from 'public/theme';

$w.onReady(function () {
  // 1. Dark Aubergine Canvas Background
  try {
    if ($w('#page1')) {
      applyElementTheme($w('#page1'), { backgroundColor: THEME.colors.aubergineDark });
    }
  } catch (e) {}

  // 2. FORCIBLY COLLAPSE AND HIDE EVERY OLD TEMPLATE ELEMENT
  const oldElementIds = [
    // Main Old Sections & Strips
    '#Section1Regular',
    '#Section1WidgetBookings',
    '#section108',
    '#section6',
    '#section1',
    '#section1col1',
    '#columnStrip104',
    '#columnStrip103',
    '#column204',
    '#column205',
    '#column206',
    '#column207',
    '#column208',
    '#column209',
    '#column210',
    // Old Media & Widgets
    '#videoBox1',
    '#gallery6',
    '#image1',
    '#line35',
    '#button22',
    // Old Texts
    '#text1', '#text2', '#text4', '#text6', '#text7', '#text9',
    '#text25', '#text30', '#text31', '#text32', '#text33', '#text34',
    '#text35', '#text36', '#text37', '#text38', '#text39', '#text40',
    '#text41', '#text42', '#text43'
  ];

  oldElementIds.forEach(id => {
    try {
      const el = $w(id);
      if (el) {
        if (typeof el.collapse === 'function') el.collapse();
        if (typeof el.hide === 'function') el.hide();
      }
    } catch (err) {
      // Ignore if element is not present or read-only
    }
  });

  // 3. Make sure the HTML embed component stays expanded & visible
  const embedComponents = ['#html4', '#html5', '#html6', '#html7', '#html8', '#html9'];
  embedComponents.forEach(id => {
    try {
      const embed = $w(id);
      if (embed) {
        if (typeof embed.expand === 'function') embed.expand();
        if (typeof embed.show === 'function') embed.show();
      }
    } catch (e) {}
  });
});
