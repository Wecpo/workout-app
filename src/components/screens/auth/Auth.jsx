import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/loader/Loader'
import { useState } from 'react'
import styles from './Auth.module.scss'
import AuthService from '../../../services/authService'
import { useMutation } from '@tanstack/react-query'

const Auth = () => {
	const [type, setType] = useState('login')
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: data => {
				alert('success')
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth-bg.png' />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
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
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
