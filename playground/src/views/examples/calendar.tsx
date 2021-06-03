import * as React from "react"
import { CalendarView } from "@rocketmakers/armstrong-edge/dist/components/calendarInput/calendarInput.component"

export const CalendarExample: React.FC = (props) => {
  return <CalendarView selectedDate={new Date()} />
}
