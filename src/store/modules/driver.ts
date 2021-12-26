import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { addNewDriver, getDrivers, updateDriver } from '@/api/driver'

export interface IDriverState {
  id: number
  name: string
  address: string
  license: boolean
}

export interface IDriversState {
    drivers: IDriverState[]
}

@Module({ dynamic: true, store, name: 'driver' })
class Driver extends VuexModule implements IDriversState {
  public drivers: IDriverState[] = []

  @Mutation
  private SET_DRIVERS(drivers: IDriverState[]) {
    this.drivers = drivers
  }

  @Action
  public async getDrivers() {
    try {
      const { data } = await getDrivers()
      this.SET_DRIVERS(data.drivers)
    } catch (e: any) {
      throw Error(e)
    }
  }

  @Action
  public async addNewDriver(payload: { name: string, address: string, license: boolean }) {
    try {
      await addNewDriver(payload)
      await this.getDrivers()
    } catch (e) {
      console.error(e)
    }
  }

  @Action
  public async updateDriver(payload: { id: number, data: { name: string, address: string, license: boolean } }) {
    try {
      const currentDriverInfo = this.drivers.find(driver => driver.id === payload.id)
      if (currentDriverInfo) {
        const requestPayload = {
          id: payload.id,
          name: payload.data.name || currentDriverInfo.name,
          address: payload.data.address || currentDriverInfo.address,
          license: payload.data.license || currentDriverInfo.license
        }
        await updateDriver(requestPayload)
        await this.getDrivers()
      }
    } catch (e) {
      console.error(e)
    }
  }
}

export const DriverModule = getModule(Driver)
