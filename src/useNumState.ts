import createPersistedState from 'use-persisted-state'

const useNumState = (key: string, initialState: number) => {
  const usePersistedNumState = createPersistedState(key)
  return usePersistedNumState(initialState)
}

export { useNumState }
