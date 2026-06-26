import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../templates/AuthLayout'
import AuthCard from '../components/layout/AuthCard'
import Input from '../components/base/Input'
import PasswordInput from '../components/shared/PasswordInput'
import Button from '../components/base/Button'
import Divider from '../components/base/Divider'

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' })
  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleLogin() {
    if (!form.username || !form.password) return alert('Isi semua field')
    navigate('/home')
  }

  return (
    <AuthLayout bgImage="/assets/images/theatre3.jpg">
      <AuthCard title="Masuk" subtitle="Selamat Datang Kembali!">
        <Input
          label="Username"
          id="login-username"
          name="username"
          placeholder="Masukkan username"
          value={form.username}
          onChange={handleChange}
          autoComplete="username"
        />
        <PasswordInput
          label="Kata Sandi"
          id="login-password"
          name="password"
          placeholder="Masukkan kata sandi"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between gap-4 mt-[-10px]">
          <p className="text-sm text-[#9b99ab]">
            Belum punya akun?{' '}
            <Link to="/register" className="text-[#a78bfa] font-semibold hover:text-[#c084fc] transition-colors">
              Daftar sekarang
            </Link>
          </p>
          <a href="#" className="text-sm text-[#a78bfa] hover:text-[#c084fc] transition-colors">
            Lupa kata sandi?
          </a>
        </div>

        <div className="flex flex-col gap-9 mt-9">
          <Button variant="primary" size="lg" fullWidth onClick={handleLogin}>
            Masuk
          </Button>
          <Divider />
          <Button variant="google" size="lg" fullWidth>
            Masuk dengan Google
          </Button>
        </div>
      </AuthCard>
    </AuthLayout>
  )
}