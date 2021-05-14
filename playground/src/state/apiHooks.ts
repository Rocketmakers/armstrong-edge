import * as React from "react"
import { ApiHooks } from "@rocketmakers/api-hooks"
import { apiClient } from "../api/apiClient"
import { endpointMapFactory } from "./endpointMap"
import { processingHook } from "./processingHook"

interface IFetchApiResponse<T> {
  data?: T
  error?: {
    status: number
    payload: any
  }
}

export const apiHooks = ApiHooks.create(apiClient, {
  generalConfig: {
    debugMode: false,
  },
  processingHook,
  hookConfigFactory: endpointMapFactory,
})
