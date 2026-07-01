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
        title="Happiness"
        description="Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen."
        rating={9.0}
        year={2023}
        duration="2j 04m"
        genres="Thriller • Drama"
        image="/assets/images/happiness.png"
        badgeText="Watch Now"
      />

      <CardSection
        title="Melanjutkan Tonton Series"
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
          title="Series Persembahan Chill"
          linkText="Lihat semua"
          linkTo="#"
        >
          {topRated.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </CardSection>
      </div>

      <CardSection
        title="Top Rating Series Hari Ini"
        linkText="Lihat semua"
        linkTo="#"
      >
        {trending.map((m) => (
          <MovieCard key={m.id} badge="trending" {...m} />
        ))}
      </CardSection>

      <CardSection title="Series Trending" linkText="Lihat semua" linkTo="#">
        {newReleases.map((m) => (
          <MovieCard key={m.id} badge="new" {...m} />
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
