
type Props = {
  params: { id: string }
}

const EditProfile = ({ params }: Props) => {
    
    return <>editing profile {params.id}</>
}

export default EditProfile