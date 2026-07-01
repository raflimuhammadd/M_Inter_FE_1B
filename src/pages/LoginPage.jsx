import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../templates/AuthLayout';
import AuthCard from '../components/layout/AuthCard';
import Input from '../components/base/Input';
import PasswordInput from '../components/shared/PasswordInput';
import Button from '../components/base/Button';
import Divider from '../components/base/Divider';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple mock validation
    if (!form.username || !form.password) return alert('Isi semua field!');
    navigate('/home');
  }

  return (
    <AuthLayout bgImage="/assets/images/theatre3.jpg">
      <AuthCard title="Masuk" subtitle="Selamat Datang Kembali!">
        <form onSubmit={handleSubmit} className="flex flex-col gap-9">
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
              <Link
                to="/register"
                className="text-[#e9e6ff] font-semibold hover:text-[#0367DB] transition-colors"
              >
                Daftar sekarang
              </Link>
            </p>
            <a
              href="#"
              className="text-sm text-[#e9e6ff] hover:text-[#0367DB] transition-colors"
            >
              Lupa kata sandi?
            </a>
          </div>

          <div className="flex flex-col gap-9 mt-9">
            <Button variant="primary" size="lg" fullWidth type="submit">
              Masuk
            </Button>
            <Divider />
            <Button variant="google" size="lg" fullWidth>
              Masuk dengan Google
            </Button>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
