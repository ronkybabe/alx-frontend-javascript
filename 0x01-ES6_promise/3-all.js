import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then((values) => {
    console.log(
      `${values[1].body} ${values[0].firstName} ${values[0].lastName}`,
    );
  }).catch(() => {
    console.log('Signup system offline');
  });
}
