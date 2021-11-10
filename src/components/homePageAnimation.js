import React, { Component } from 'react'
import Typical from 'react-typical'

class Example extends React.Component {
  render () {
    return (
      <Typical
        steps={['Hello', 2000, 'Hello world!', 2000]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}