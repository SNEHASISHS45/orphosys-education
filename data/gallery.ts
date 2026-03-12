export interface Photo {
  id: string;
  url: string;
  alt: string;
  category: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
}

export const photos: Photo[] = [
  // Collage Activities
  {
    id: "photo-1",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxFcj0BD1OV-4MsWeJVgX119S_RngP0CSLUX9_YnHrKZh5AUA4x-8f3YxMSY_MtgmNLCXcfYEgNRXO5mkeQV0yrpD_M0e_0cyMfHGRorjx4oXtbzhBwnYAfuf3AnuH-wOU6MtljhdFmr1drPt4CaOsnfXSDGtFWePTAJwlwagnCgLYbM3PSzoBy46GitsU1oxzpd93rUs5bBVrCuU8LUZKXHCWLbRVnkAY5m3YRBhVIMbyS3yFJJa-T8UADzAPOqLbnx8EFz-eG9g",
    alt: "University students collaborating in a group study session",
    category: "Collage Activities",
  },
  {
    id: "photo-2",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyOsqC88uCJHIO98Oz3lO6m_79pirLW6Y8AO4FH-UbS3yJKICe1fgT9qCT_ll6eQ-IB2mbK801Q_EQDp9YxxZgfZUOWbH-ckFRehhG1icaKC0HUAITjBOXiZaEsG0iV4-1yDODXlha75grJkES3zgr4qbINfBgGAlYkdrxGtEJ7MB7444UpSVxMlcOcGYhmKt70eOSTuwBxZPWvpDcrPRBfa67HOzseK2NqVron2qD5hUPVyNqCJl0s_d3Hi5a5dFOj2LKo9HjN3I",
    alt: "Students celebrating graduation ceremony throwing caps",
    category: "Collage Activities",
  },
  {
    id: "photo-3",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5GOFW4u_RGSE2WvY6t8jgp3OluM_Wr-FA-FyINCiaXg3fTpqYywiahk894XStcHAy46_8WmxV-nUqeXvWoWX4eQF6baan2MzYpj8mI2kEtfkjFbsv0BZddKteRPQIDkBgWVRH1ROf7c5u3Hk4y5EKz3kFGGVI2HlsSclnvmO8pSlFuxR7Wygkaz8wxLHG3v8mpE0hr5LodcSc07mH4SrRlFKln-RjcRr2Q7po8BhwlsyUOvX_knvFJLQd50PZ-5OQo7yXjjwGvLU",
    alt: "Group of diverse students working on a laptop",
    category: "Collage Activities",
  },
  {
    id: "photo-4",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUApsjbLSa8W7BCIaR846e_3K1qlyn3uMe9qb1jaiq3Os0eBe5-KbyGykycK1rD27qE1pKiRXgNBXCba9zL-OdhoJiolOwpfwu_w4tzqY3Le3UAuCEkrfvaDrTCU_lb1jeXdbbhHs28MFj5Wmyk4yTKYkX2wd9TJTUGcJjkfymRvjTu-9yyKHx4ZbRJS_o01KlZFc51vWbJz9xXFxHOc4aHpPtZe_YZjZBR-5Eb-0k2jhCydrTCxchUpQ65_jBRIuz57yzypQRTL0",
    alt: "Students participating in a workshop or seminar",
    category: "Collage Activities",
  },
  // School Environment & Facilities
  {
    id: "photo-5",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS8YKwDZIPoc0Lc_y1wTR11wy86tyKU8eqjVXDKlTWf1DeIFygWwBkkQ1OyjhrvkYdU_HQdcQMLkfRSTahGfC6iCyfW7fl--N1eMmnUNZle7uqNj8xc10JiX1FKLF5KNgHcMyaZeBcFnp1NfYEqrgLiU1p1yTDWLY-sU2Q2iuzfhrFjG9LS57BVsU_6y514ioY9V1r8hi4pfFRWV83E2XnhfaoM65Qtws-8mUumneM5JSyxAadczSjdTmPJy4DUiYj8Lx7WWO1xbA",
    alt: "Modern spacious classroom with desks and whiteboard",
    category: "School Environment & Facilities",
  },
  {
    id: "photo-6",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOUYdpkLT9rSDKgdPMSPUQXQXNAkzqQ9wYlLA5cE9JVVabPiwYma2alM_yqMxKUrHKJHb-28t2tRCJbNQhJUJMr0o5BwP-QWRRoB1id7_SQXCLoo99lHQIELEEG13-SMcwV1w103TZF-LOJU1zh1KRlT4xRfGm4gYF9jdKVgHd5tzkDQMcMHy4_MzvWBHn2vJysapd1HE0u9sdvSifcuhdYuYZ0g-rL1eTONtYogz-i54sgnwb71TNT1Ex6m1pwOA_venozAzpCxs",
    alt: "Well stocked modern school library with books",
    category: "School Environment & Facilities",
  },
  {
    id: "photo-7",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV9MsqcRAx1iZwp-PsyvBszPfkwXHBYbCYK-WxevAzPxIheJ4IZNluAhMSYHMSUK-285XD2d62AJEzxq8U8Dz_k_TiVJWggestFqJ2SxEDjStOknGTMPAAqFIvaUrqdQUUCV5tT8O6HtjqGhJdhtSUUuiZnJ0GkYsuu7Cz37rFG4t04Lpwc2Fu-SKQLKn0rQs-sxspsZHA1BkVYEbiuHLuxhHspbOJ7zCVhszdPQh84aHDIn1M7TXB1LDDR2q0BwCB5SmukZcwNP8",
    alt: "Modern university building exterior architecture",
    category: "School Environment & Facilities",
  },
  {
    id: "photo-8",
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZqPhtzwMFfUhTGN-0uZUjehhtIW2Go1kT9SFEze8JIE1ldHQPYedjmgDi6Hzg0yHjrGwdz_dK8u-yg8WrYEGFajD3edgQLxeqN6Q-2nQ3kmrKli9yYmuf78llfyKn7prKwl7hBM0OHWpNuVekdeaAn_QagNbgje-LVucA4JjDNFlL82maiwz5bGugDrJk0RzV30mq1onS70yHAdHbMjB3LgD8BvAHw3fOy3hLub8DrjCAkoIl9yMhkHablkJojkOFYA02lhMiM4",
    alt: "Computer lab facility with high end workstations",
    category: "School Environment & Facilities",
  },
];

export const videos: Video[] = [
  {
    id: "video-1",
    title: "Mastering Advanced Mathematics",
    description: "Complete guide to calculus and trigonometry fundamentals.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIv9gkc-UqU0sryof5avpFGt-9OI-aC6dHsbPDtYwfUA6YWKssCYCmXZ5AuklyCt8fDkxhiLnVg1yW6ks1mmTlnKMWgA8oCZPCEaKB8vk06MsRmUtLyzVBM2XuE6emg3SW6Lz0LC247cLWJCOjXCQOtQI3fiWqSqe9neF4UwZKpOlNOi0fMl4rYn9g_NczDCB0K0ezaM57cWp3d7l5raxe5ut1oQ-TZ8DGFkE4Gsev7B3ALWtL_R7VroJIEAySV6hlfFlF3FrL1Zg",
    duration: "12:45",
  },
  {
    id: "video-2",
    title: "Physics Lab: Energy Dynamics",
    description: "Hands-on experiment demonstrating kinetic and potential energy.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyvGqm6VfInRYE_JEy6TnmWQIdrA6M-C4wEYEvtI6IPTbZ-xXhgfikaI2HGx6ZSNFlXz6sApEBEVnmaggeZR63jNyeHlCJXYVYuCvN_HSQfL438aZkrIb2dVTuhEdvEq7_uxRVzBtBqmHSBUxahqdvvJ8L0kX_mcfFTVIcGhPR3I0EHQz35CrZz-oCsXD7t5Wn9NKsAlR-dpx9EGUD_eiMkLkOSPvjJ7mknhVUUqxWWpHhFvA7_w5vxNeTPwO2D-KLOw9vN2hNseY",
    duration: "08:20",
  },
  {
    id: "video-3",
    title: "English Literature Seminar",
    description: "Deep dive into classical Shakespearean sonnets.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZQWkQDoVnHf10wqfATzcRYM3FEPYbZG1N8ZLNSEXjfhxAB5NI4TA_nSsJhKtkixu0qAADAtnL2bDn9a_AdpJiM-Guwry5NIO20vyMEesBp9f-QYyogq_2unOyyO-cnlTFYK77E_voLZ53c_N05ceUP5cX7syJO8o1MHIDIhXfXS9twzIUDLjItk5WVJUh55vSiyp6lUGlX3DU0CA7ue5i73wcHotBRTjVFiKseLmp3Yf1NGobKyf8on5iFRIRWe2xsyvFpSVOPqY",
    duration: "15:10",
  },
  {
    id: "video-4",
    title: "Cellular Biology Workshop",
    description: "Visualizing cell structures and organelles in detail.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYfnAEU-FB2kCjNwIye-t_4K7wJMdEIhajGEoYvK8NoPeAGU9wN-l9jdV9DyOOP1t9ZsrQjTvMEhjPZzkHDvmsrsy9RwvRDoT8haT5MKm5Xn2P5PNCrVeoQWb4TDVIGxRtYWrAHXg-3juVQCIMJ_BiabDhI9vgFIbfORdCzgAMCdV3otd7N3tay4XJDzmSG8DQWaaZVAOT8u9D_Fu8ghzCzEM8YfHhrpkidxU4DdonjbSoL7mHMDibInCA9_kTRlPUKShgasgij1I",
    duration: "10:30",
  },
  {
    id: "video-5",
    title: "Effective Study Techniques",
    description: "Scientific methods to improve memory and concentration.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpJB0kytFT98guKo1ctp_PkuF4CF9Qg2_DJMLn5j-_b0HCHoukre5Tmc3yo2GMQZHHVbazkjpwubVVIuPcNHhbhI8TOotjJFunBrHvygOVAKfRY0I_bSUErJ-4OKI5x3W1j1WqA89kxBQI5DayP3IIqFpnUs8FCLy80X5XNJc64b-VPifBVCAJN2DmlC_zsE4XpgPerqsGqOcMk6DlxEz7EgJl5_BMIhq16Pp4xc4Rw-HiBf7weQ9v8VsUvH6NI12WTFNDNLzOGWw",
    duration: "22:00",
  },
  {
    id: "video-6",
    title: "History of World Civilizations",
    description: "An overview of major historical milestones across ages.",
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYRWSPHYBCxgrthv1EYaePiCwq3aBuuT62TKAvtgrAc6vmpYks0jM0rL8CM51proPBprnFfOiRakP9rr5R0_lu1Sa1ltu-b9TxXFECUEGliPHV9CVeov7ISSiwriEvmBrZpxCCbkxMhXQZ0OKmLwHZlS73C3Jw74P74Hk1XaWauIBEHQfZexQwW1KlnV7hx7RLVeAKmxBzEm4a-lGAuxnmitErx2LdB2bMB-92Jp5kWK_jID72RxeMZPoh74e4QfjmldFsGursN-I",
    duration: "18:15",
  },
];
