import { Fruit } from '../../models/fruits'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { deleteFruit, getOneFruit, updateFruit } from '../api/fruits'

function OneFruit() {
  const { id } = useParams() as { id: string }
  const navigate = useNavigate()

  const [fruit, setFruit] = useState(null as Fruit | null)

  useEffect(() => {
    getOneFruit(id)
      .then((data) => setFruit(data))
      .catch((err) => console.error(err))
  }, [id])

  const voteUp = () => id && fruit && changeRating(id, fruit.rating + 1)
  const voteDown = () => id && fruit && changeRating(id, fruit.rating - 1)

  const changeRating = (id: string, rating: number) => {
    updateFruit(id, rating)
      .then((data) => setFruit(data))
      .catch((err) => console.error(err))
  }

  const handleDelete = () => {
    if (confirm('Are you sure?')) {
      deleteFruit(id)
        .then(() => navigate('/'))
        .catch((err) => console.error(err))
    }
  }

  return (
    <div>
      <h2>{fruit ? fruit.name : '...loading'}</h2>
      {fruit && (
        <>
          <p>Current deliciousness rating: {fruit.rating}</p>
          <button onClick={voteUp}>Yum!</button>
          <button onClick={voteDown}>Ew!</button>
          <button onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  )
}

export default OneFruit