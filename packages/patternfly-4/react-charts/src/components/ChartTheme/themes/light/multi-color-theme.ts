/* eslint-disable camelcase */
import {
  global_active_color_200,
  global_active_color_300,
  global_Color_dark_100,
  global_Color_light_100
} from '@patternfly/react-tokens';
import { ColorTheme } from '../color-theme';

// TODO Replace values with PF css variable when available

// Colors
const COLOR_AXIS_FILL = 'transparent';
const COLOR_AXIS_STROKE = '#D2D2D2';
const COLOR_FILL = global_active_color_200.value;
const COLOR_LABEL = global_Color_dark_100.value;
const COLOR_SCALE = ['#39A5DC', '#9C92F5', '#59C768', '#FFD47D'];
const COLOR_STACK_STROKE = global_Color_light_100.value;
const COLOR_STROKE = global_active_color_300.value;
const COLOR_TOOLTIP_FILL = '#EDEDED';
const COLOR_TOOLTIP_STROKE = '#EDEDED';
const COLOR_TOOLTIP_FLYOUT_FILL = '#151515';
const COLOR_TOOLTIP_FLYOUT_STROKE = '#151515';

export const LightMultiColorTheme = ColorTheme({
  COLOR_AXIS_FILL,
  COLOR_AXIS_STROKE,
  COLOR_FILL,
  COLOR_LABEL,
  COLOR_SCALE,
  COLOR_STACK_STROKE,
  COLOR_STROKE,
  COLOR_TOOLTIP_FILL,
  COLOR_TOOLTIP_STROKE,
  COLOR_TOOLTIP_FLYOUT_FILL,
  COLOR_TOOLTIP_FLYOUT_STROKE
});
