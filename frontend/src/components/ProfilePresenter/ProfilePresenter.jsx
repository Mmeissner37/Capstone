

const ProfilePresenter = ({profile}) => {
    return (
        <ul className="profile-presenter">
            Name: {profile.name}
            Species: {profile.species}
            Breed: {profile.breed}
            Date of Birth: {profile.date_of_birth}
        </ul>
    )
}