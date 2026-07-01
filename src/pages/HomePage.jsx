import HomeLayout from '../templates/HomeLayout';
import Hero from '../components/layout/Hero';
import CardSection from '../components/shared/CardSection';
import MovieCard from '../components/shared/MovieCard';
import {
  continueWatching,
  topRated,
  trending,
  newReleases,
} from '../data/movies';

export default function HomePage() {
  return (
    <HomeLayout>
      {/* Hero data is passed directly; no API fetch in this version */}
      <Hero
        title="Duty After School"
        description="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        rating={9.2}
        year={2024}
        duration="2j 49m"
        genres="Sci-Fi • Drama"
        image="/assets/images/beranda.png"
        badgeText="Watch Now"
      />

      <CardSection
        title="Melanjutkan Tonton Film"
        linkText="Lihat semua"
        linkTo="#"
      >
        {continueWatching.map((m) => (
          <MovieCard key={m.id} variant="continue-watching" {...m} />
        ))}
      </CardSection>

      {/* Alternating dark bg for section separation */}
      <div className="bg-[#16161f]">
        <CardSection
          title="Top Rating Film dan Series Hari ini"
          linkText="Lihat semua"
          linkTo="#"
        >
          {topRated.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </CardSection>
      </div>

      <CardSection title="Film Trending" linkText="Lihat semua" linkTo="#">
        {trending.map((m) => (
          <MovieCard key={m.id} badge="trending" {...m} />
        ))}
      </CardSection>

      <CardSection title="Rilis Baru" linkText="Lihat semua" linkTo="#">
        {newReleases.map((m) => (
          <MovieCard key={m.id} badge="new" {...m} />
        ))}
      </CardSection>
    </HomeLayout>
  );
}
