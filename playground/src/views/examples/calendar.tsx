import * as React from "react"
import { CalendarInput, Calendar, Form } from "@rocketmakers/armstrong-edge"

export const CalendarExample: React.FC = () => {
  const { formState, formProp } = Form.use<{ myDate: string }>({myDate: "09/06/2021"})

  return <CalendarInput bind={formProp("myDate").bind()} formatString="dd/MM/yyyy" />
}
