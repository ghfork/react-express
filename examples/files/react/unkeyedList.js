const data = [
  { id: 'a', name: 'Devin' },
  { id: 'b', name: 'Gabe' },
  { id: 'c', name: 'Kim' },
]

export default () => (
  <div>
    {data.map(item => (
      <div>{item.name}</div>
    ))}
  </div>
)
