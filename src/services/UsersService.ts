import $api, { API_URL } from "../http"
import { AxiosResponse } from "axios"
import { IUser } from "../models/IUser"
export default class UsersService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return $api.post(`${API_URL}model/user/`, {
      render_options: { only: ["id", "email", "roles", "organization_id", "activated"] },
    })
  }
}
