
type Props = {
  warehouse: {
    id: number;
    name: string;
  }
}

export function WarehouseCard(props: Props) {
  const { warehouse: {id, name} } = props
  return (
      <li id={id.toString()}>{name}</li>
  )
}