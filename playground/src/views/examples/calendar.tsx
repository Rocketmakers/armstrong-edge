import * as React from "react"
import { CalendarInput, Form } from "@rocketmakers/armstrong-edge"

export const CalendarExample: React.FC = () => {
  const { formState, formProp } = Form.use<{ myDate: string }>()

  return <CalendarInput bind={formProp("myDate").bind()} formatString="dd/MM/yyyy" />
}
