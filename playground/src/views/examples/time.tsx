import * as React from "react"
import { TimeInput, Form } from "@rocketmakers/armstrong-edge"

export const TimeExample: React.FC = () => {
  const { formProp, formState } = Form.use<{ myDate: string }>()

  return <TimeInput bind={formProp("myDate").bind()}  />
}
