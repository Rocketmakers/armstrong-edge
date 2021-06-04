import * as React from "react"
import { CalendarView } from "@rocketmakers/armstrong-edge/dist/components/calendarView/calendarView.component"
import { ICalendarHighlight } from "@rocketmakers/armstrong-edge/dist/components/calendarView/calendarView.utils"

export const CalendarExample: React.FC = () => {
  const dateFormat = "dd/MM/yyyy"
  const initialDate = "12/06/2021"
  const minDate = "01/06/2020"
  const maxDate = "30/06/2022"
  const rangeToDate = initialDate

  const [currentDate, setCurrentDate] = React.useState(initialDate)

  const highlights = React.useMemo<ICalendarHighlight[]>(() => {
    return [
      { date: "02/06/2021", className: "brexit" },
      { date: "23/06/2021", className: "means" },
      { date: "07/07/2021", className: "breakfast" },
    ]
  }, [])

  return (
    <CalendarView
      min={minDate}
      max={maxDate}
      formatString={dateFormat}
      selectedDate={currentDate}
      rangeTo={rangeToDate}
      onDateClicked={(__, date) => setCurrentDate(date)}
      highlights={highlights} />
  )
}
