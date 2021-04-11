import React, {createContext} from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

const Provider = ({domain, children, i18n}) => {
  const value = {
    domain,
    i18n
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

Provider.propTypes = {
  domain: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
  i18n: PropTypes.object.isRequired
}

export default {
  Provider,
  Context
}
