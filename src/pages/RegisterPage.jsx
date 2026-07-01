import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../templates/AuthLayout';
import AuthCard from '../components/layout/AuthCard';
import Input from '../components/base/Input';
import PasswordInput from '../components/shared/PasswordInput';
import Button from '../components/base/Button';
import Divider from '../components/base/Divider';

export default function RegisterPage() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear error on change to avoid stale state
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple mock validation
    if (!form.username || !form.password) return alert('Isi semua field!');
    navigate('/home');
  }

  return (
    <AuthLayout bgImage="/assets/images/theatre4.jpg">
      <AuthCard title="Daftar" subtitle="Selamat datang!">
        <form onSubmit={handleSubmit} className="flex flex-col gap-9">
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
            <Link
              to="/"
              className="text-[#e9e6ff] font-semibold hover:text-[#0367DB] transition-colors"
            >
              Masuk
            </Link>
          </p>

          <div className="flex flex-col gap-9 mt-9">
            <Button variant="primary" size="lg" fullWidth type="submit">
              Daftar
            </Button>
            <Divider />
            <Button variant="google" size="lg" fullWidth>
              Daftar dengan Google
            </Button>
          </div>
        </form>
      </AuthCard>
    </AuthLayout>
  );
}
