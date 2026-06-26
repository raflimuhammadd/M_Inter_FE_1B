import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../templates/AuthLayout'
import AuthCard from '../components/layout/AuthCard'
import Input from '../components/base/Input'
import PasswordInput from '../components/shared/PasswordInput'
import Button from '../components/base/Button'
import Divider from '../components/base/Divider'

export default function RegisterPage() {
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  function handleRegister() {
    if (!form.username || !form.password || !form.confirmPassword)
      return alert('Isi semua field')
    if (form.password !== form.confirmPassword)
      return setError('Password tidak cocok')
    navigate('/home')
  }

  return (
    <AuthLayout bgImage="/assets/images/theatre4.jpg">
      <AuthCard title="Daftar" subtitle="Selamat datang!">
        <Input
          label="Username"
          id="reg-username"
          name="username"
          placeholder="Pilih username unikmu"
          value={form.username}
          onChange={handleChange}
          autoComplete="username"
        />
        <PasswordInput
          label="Kata Sandi"
          id="reg-password"
          name="password"
          placeholder="Buat kata sandi yang kuat"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
        />
        <PasswordInput
          label="Konfirmasi Kata Sandi"
          id="reg-confirm"
          name="confirmPassword"
          placeholder="Ulangi kata sandi"
          value={form.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <p className="text-sm text-[#9b99ab] mt-[-10px]">
          Sudah punya akun?{' '}
          <Link to="/" className="text-[#a78bfa] font-semibold hover:text-[#c084fc] transition-colors">
            Masuk
          </Link>
        </p>

        <div className="flex flex-col gap-9 mt-9">
          <Button variant="primary" size="lg" fullWidth onClick={handleRegister}>
            Daftar
          </Button>
          <Divider />
          <Button variant="google" size="lg" fullWidth>
            Daftar dengan Google
          </Button>
        </div>
      </AuthCard>
    </AuthLayout>
  )
}