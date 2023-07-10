/** Type denoting a calendar month for display within the dropdowns */
export interface IMonth {
  /** The month's index with a year (jan = 0, dec = 11) */
  index: number;
  /** The formatted name of the month to display */
  name: string;
  /** True if the month should be unavailable for selection */
  disabled?: boolean;
}
