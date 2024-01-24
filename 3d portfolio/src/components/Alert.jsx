import './index.css'

const Alert = ({type, text}) => {
  return (
    <div className='alert'>
         <div className={`${type === 'danger' ? 'hazard' : 'safe'}`} role='alert'>
            <p className='text'>{type === 'danger' ? 'failed' : 'success'}</p>
            <p className='text'>{text}</p>
         </div>
    </div>
  )
}

export default Alert