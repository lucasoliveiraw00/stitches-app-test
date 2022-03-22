type White = ['#ffffff'];
type Teal = ['#2c91ad', '#206a7f', '#54b8d3'];
type Green = ['#29A152', '#1d7246', '#47d089'];
type Orange = ['#F27A00', 'rgba(242, 122, 0, 0.5)'];

export type Palette = {
  /**
   * @string `#FFFFFF`
   */
  white: White;
  /**
   * @string `#2c91ad`
   * @string `#206a7f`
   * @string `#54b8d3`
   */
  teal: Teal;
  /**
   * @string `#29A152`
   * @string `#1d7246`
   * @string `#47d089`
   */
  green: Green;
  /**
   * @string `#F27A00`
   * @string `rgba(242, 122, 0, 0.5)`
   */
  orange: Orange;
};
