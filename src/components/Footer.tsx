export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-10 px-4 mt-20">
      <div className="xl:container xl:mx-auto text-center text-dark">
        <p>
          &copy; {new Date().getFullYear()} Hugo Frota. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
