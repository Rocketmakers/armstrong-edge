import * as React from "react"
import { DateTimeInput, Form } from "@rocketmakers/armstrong-edge"

export const DateTimeExample: React.FC = () => {
  const { formProp, formState } = Form.use<{ myDate: string }>()

  return <DateTimeInput bind={formProp("myDate").bind()}  />
}
