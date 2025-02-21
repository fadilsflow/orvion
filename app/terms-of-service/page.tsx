import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const TermsOfService = () => {
  const sections = [
    {
      title: "Ketentuan Umum",
      content: `
      Orvion berusaha untuk menjaga ketersediaan layanan dan kualitas produk sebaik mungkin.
      Kami tidak bertanggung jawab atas segala bentuk kerugian yang disebabkan oleh kesalahan penggunaan layanan oleh pelanggan.
      Keamanan data pelanggan adalah prioritas kami, namun kami tidak dapat menjamin keamanan data secara mutlak terhadap serangan pihak ketiga.
    `,
    },
    {
      title: "Penggunaan Sumber Daya",
      content: `
      Pengguna harus menggunakan CPU, RAM, dan bandwidth sesuai dengan batas wajar yang ditentukan oleh paket layanan yang dipilih.
      Penggunaan berlebihan yang menyebabkan overload server dapat mengakibatkan pembatasan atau penghentian layanan sementara tanpa pemberitahuan sebelumnya.
    `,
    },
    {
      title: "Kebijakan Pembayaran dan Penghentian Layanan",
      content: `
      Layanan hosting berbasis langganan pra-bayar. Jika pembayaran tidak diterima dalam 7 hari setelah tanggal jatuh tempo, server atau layanan terkait dapat dinonaktifkan, dan semua data yang disimpan dapat dihapus secara permanen.
      Tidak ada pengembalian dana setelah pembayaran dilakukan, kecuali ada kesepakatan khusus antara Orvion dan pelanggan.
    `,
    },
    {
      title: "Privasi Pengguna",
      content: `
      Kami menghargai privasi pengguna dan berkomitmen untuk menjaga kerahasiaan data.
      Keamanan akun pengguna adalah tanggung jawab pengguna, dan segala aktivitas dari akun pengguna sepenuhnya menjadi tanggung jawab pengguna.
    `,
    },
    {
      title: "Penggunaan yang Dilarang",
      content: `
      Pengguna dilarang keras menyimpan, mendistribusikan, atau mengunggah konten ilegal, seperti pornografi, perjudian, atau konten terkait aktivitas kriminal.
      Pengguna dilarang menggunakan layanan untuk kegiatan ilegal seperti hacking, DDoS, atau pelanggaran hukum lainnya.
      Distribusi virus, malware, atau konten yang melanggar hak cipta juga dilarang.
      Aktivitas mining cryptocurrency atau tindakan yang membebani server secara berlebihan tidak diperbolehkan.
      Eksploitasi bug, kerentanan, atau kelemahan sistem dilarang keras dan dapat mengakibatkan penghentian layanan segera.
    `,
    },
    {
      title: "Kebijakan Downtime dan Kompensasi",
      content: `
      Dalam hal downtime, pengguna berhak mendapatkan kompensasi berupa perpanjangan waktu layanan atau pengembalian dana berdasarkan durasi downtime.
      Kompensasi hanya berlaku jika downtime disebabkan oleh kesalahan dari pihak Orvion.
    `,
    },
    {
      title: "Penghentian dan Perubahan Layanan",
      content: `
      Orvion berhak menghentikan atau mengubah syarat dan ketentuan layanan kapan saja dengan pemberitahuan melalui email atau pengumuman di situs resmi.
      Dengan terus menggunakan layanan kami, Anda setuju untuk mematuhi perubahan yang berlaku.
    `,
    },
    {
      title: "Kebijakan Pengembalian Dana",
      content: `
      Pengembalian dana hanya berlaku dengan alasan yang jelas dan valid, dan harus disetujui oleh kedua belah pihak.
      Pengguna harus memberikan penjelasan detail untuk permintaan pengembalian dana, yang akan dievaluasi sebelum disetujui.
    `,
    },
    {
      title: "Perlindungan Hukum",
      content: `
      Dengan menggunakan layanan kami, pengguna setuju untuk membebaskan Orvion dari segala tuntutan hukum, gugatan, kerusakan, atau penalti yang timbul dari penyalahgunaan, aktivitas ilegal, atau pelanggaran terhadap Syarat dan Ketentuan ini.
    `,
    },
    {
      title: "Kepatuhan Hukum",
      content: `
      Pengguna harus mematuhi semua hukum yang berlaku saat menggunakan layanan kami.
      Orvion berhak mematuhi permintaan dari otoritas hukum yang sah terkait data pengguna.
    `,
    },
    {
      title: "Penafian",
      content: `
      Orvion tidak menjamin bahwa layanan akan berjalan tanpa gangguan, bebas dari kesalahan, atau sepenuhnya aman.
      Pengguna menggunakan layanan ini atas risiko mereka sendiri.
    `,
    },
    {
      title: "Konten Pengguna",
      content: `
      Pengguna bertanggung jawab penuh atas konten yang diunggah, disimpan, atau didistribusikan melalui layanan kami.
      Orvion berhak menghapus konten yang melanggar syarat dan ketentuan ini tanpa pemberitahuan sebelumnya.
    `,
    },
    {
      title: "Lisensi dan Hak Kekayaan Intelektual",
      content: `
      Semua hak kekayaan intelektual yang terkait dengan layanan Orvion (seperti logo, nama, dan konten) adalah milik Orvion.
      Pengguna dilarang menggunakan hak kekayaan intelektual Orvion tanpa izin tertulis.
    `,
    },
    {
      title: "Batasan Tanggung Jawab",
      content: `
      Orvion tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan kami.
      Tanggung jawab Orvion terbatas pada jumlah yang dibayarkan oleh pengguna untuk layanan yang diberikan.
    `,
    },
    {
      title: "Penyelesaian Sengketa",
      content: `
      Jika terjadi sengketa, pengguna dapat menghubungi tim dukungan kami untuk penyelesaian terbaik.
      Sengketa yang tidak dapat diselesaikan secara damai akan diselesaikan melalui pengadilan yang berwenang di wilayah hukum Orvion.
    `,
    },
    {
      title: "Force Majeure",
      content: `
      Orvion tidak bertanggung jawab atas kegagalan atau penundaan dalam menyediakan layanan yang disebabkan oleh kejadian di luar kendali kami, seperti bencana alam, perang, atau gangguan jaringan.
    `,
    },
    {
      title: "Perubahan Syarat dan Ketentuan",
      content: `
      Orvion berhak mengubah atau memperbarui syarat dan ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.
      Perubahan akan berlaku segera setelah diposting di situs resmi Orvion.
    `,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Syarat dan Ketentuan Layanan Orvion
        </h1>

        <p className="text-center mb-8">
          Selamat datang di Orvion! Dengan menggunakan layanan kami, Anda
          dianggap telah membaca, memahami, dan menyetujui semua syarat dan
          ketentuan yang berlaku di bawah ini.
        </p>

        <Accordion type="single" collapsible className="w-full">
          {sections.map((section, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold   p-4 rounded-md">
                {section.title}
              </AccordionTrigger>

              <AccordionContent className="p-4 border-t ">
                <p className="whitespace-pre-line ">{section.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default TermsOfService;
