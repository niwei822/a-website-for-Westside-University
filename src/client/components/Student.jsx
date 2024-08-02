const Student = () => {
  const handleClick = (e) => {
    console.log('click!')
  }

  return (
    <div className='main'>
      <div className='box'>
        <button className='btn'>Back to Class List</button>
        <h1>Student:</h1>
        <h1>
          {'STUDENT FIRST NAME'} {'STUDENT LAST NAME'}
        </h1>
        <h3>Grade: {'GRADE'}</h3>
        <h3>Email: {'EMAIL ADDRESS'}</h3>
        <h2>Update Grade:</h2>
        <div>
          <button onClick={handleClick} className='btn' value='A'>
            A
          </button>
          <button onClick={handleClick} className='btn' value='B'>
            B
          </button>
          <button onClick={handleClick} className='btn' value='C'>
            C
          </button>
          <button onClick={handleClick} className='btn' value='D'>
            D
          </button>
          <button onClick={handleClick} className='btn' value='F'>
            F
          </button>
        </div>
      </div>
    </div>
  )
}

export default Student
