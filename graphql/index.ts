export const getUserQuery = `
query GetUser($email: String!) {
    user(by: {email: $email}){
        id
        name
        email
        avatarUrl
        description
        githubUrl
        linkedinUrl
    }
}`;

export const createUserMutation = `
mutation CreateUser($input: UserCreateInput!){
    userCreate(inupt: $input){
        user {

            id
            name
            email
            avatarUrl
            description
            githubUrl
            linkedinUrl
        }
    }
}
`;
