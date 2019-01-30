import React from 'react'

interface IDebugProps {
  values: any
}

const Debug: React.FC<IDebugProps> = ({ values }) => (
  <div>
    <h5>Debug Info</h5>
    <pre>{JSON.stringify(values, null, 2)}</pre>
  </div>
)

export default Debug
