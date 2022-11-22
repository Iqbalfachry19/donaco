import { Prisma } from '@prisma/client';
import { prisma } from '../common/prisma';
const DonationData: Prisma.DonationCreateInput[] = [
  {
    imageUrl: '/image/banjir.jpeg',
    title: 'Ribuan warga terdampak banjir di kalteng',
    maxDonation: 200000000,
    currentDonation: 61765500,
    maxDay: 96,
    donationAmount: 4210,
    story:
      'Beberapa pekan terakhir hujan mengguyur sejumlah wilayah di kabupaten kotawaringin Timur dan Kabupaten Katingan, Kalimantan Tengah. Hujan dengan intensitas tinggi ini menyebabkan banjir di puluhan',
  },
  {
    imageUrl: '/image/bantuan.avif',
    title: 'Bantu petani kami bangkit',
    maxDonation: 200000000,
    currentDonation: 6165500,
    maxDay: 52,
    donationAmount: 4210,
    story:
      'tujuan penggunaan dana adalah untuk biaya operasional, pembelian dan pengadaan alat dan bahan pertanian yang meliputi : Excavator Mini/Cultivator, Mesin pengompos, Mesin Pompa Irigasi/Mesin Bor Tanah, Alat-alat pertanian, pelatihan peningkatan keterampilan petani, dan lain sebagainya. ',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of DonationData) {
    const user = await prisma.donation.create({
      data: u,
    });
    console.log(`Created donation with id: ${user.id}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
