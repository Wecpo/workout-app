import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'
import { useState } from 'react'
import styles from './Auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('auth')
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data, errors, type)
	}

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{/* {isLoading || isLoadingAuth && <Loader />} */}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors.email?.message}
						name='email'
						type='text'
						options={{ required: 'Email is required' }}
						register={register}
						placeholder='Enter email'
					/>
					<Field
						error={errors.password?.message}
						name='password'
						type='password'
						options={{ required: 'password is required' }}
						register={register}
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('auth')}>Sign in</Button>
						<Button clickHandler={() => setType('reg')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
