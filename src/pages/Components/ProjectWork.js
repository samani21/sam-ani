import { Card, Container, Image, Info, List, ProjectWorkContainer } from '@/Components/ProjectWork'
import React from 'react'

const ProjectWork = () => {
    return (
        <ProjectWorkContainer>
            <Container>
                <h2>My Projects</h2>
                <List>
                    <Card>
                        <Image image={'/image/bisnisku.png'} onClick={() => window.open('https://front-end-bisnisku-tqk1.vercel.app/', '_blank')} />
                        <Info>
                            <h3>Bisnisku</h3>
                            <p>Bisnisku adalah platform inovatif yang dirancang untuk membantu pengusaha dalam mengelola keuangan dan menjalankan bisnis e-commerce dengan merek sendiri. Dengan fitur manajemen keuangan yang canggih, pengguna dapat melacak pemasukan, pengeluaran, serta keuntungan secara real-time.</p>
                        </Info>
                    </Card>
                    <Card>
                        <Image image={'/image/syntax.png'} onClick={() => window.open('https://www.instagram.com/syntax_project/', '_blank')} />
                        <Info>
                            <h3>SyntaxProject</h3>
                            <p>SyntaxProject adalah penyedia jasa pembuatan website yang melayani berbagai kebutuhan, mulai dari pengembangan situs untuk usaha dan bisnis, hingga proyek akademik seperti tugas kuliah atau skripsi.

                                Selain itu, SyntaxProject juga berperan sebagai IT konsultan, membantu klien dalam merancang, mengoptimalkan, dan mengelola sistem teknologi informasi mereka agar lebih efisien dan sesuai dengan kebutuhan. Dengan tim profesional dan pengalaman luas, SyntaxProject siap memberikan solusi digital yang inovatif dan berkualitas.</p>
                        </Info>
                    </Card>
                    <Card>
                        <Image image={'/image/psb.png'} onClick={() => window.open('https://psb-ppah-2025-2026.github.io/', '_blank')} />
                        <Info>
                            <h3>Form PSB Pesantren</h3>
                            <p>Form PSB Pesantren adalah landing page yang dirancang khusus untuk proses Penerimaan Santri Baru (PSB) di pesantren. Platform ini memudahkan calon santri dan orang tua dalam mengakses informasi pendaftaran, mengisi formulir secara online, serta mengetahui tahapan seleksi dengan lebih praktis dan transparan.

                                Dengan desain yang responsif dan user-friendly, Form PSB Pesantren membantu pesantren dalam mengelola data pendaftaran secara lebih efisien, sehingga proses seleksi santri baru dapat berjalan dengan lancar dan terorganisir.</p>
                        </Info>
                    </Card>
                </List>
                <h2>Works</h2>
                <List>
                    <Card>
                        <Image image={'/image/pbkm.png'} onClick={() => window.open('https://ptpbkm.com/', '_blank')} />
                        <Info>
                            <h3>PBKM</h3>
                        </Info>
                    </Card>
                    <Card>
                        <Image image={'/image/special-moment.png'} onClick={() => window.open('https://special-moment.info/', '_blank')} />
                        <Info>
                            <h3>Special Moment</h3>
                            <p>Special Moment adalah platform undangan online yang memungkinkan pengguna untuk membuat dan mengelola undangan digital dengan mudah dan elegan. Dengan berbagai pilihan desain menarik, fitur RSVP, serta integrasi dengan media sosial, Special Moment membantu menciptakan pengalaman undangan yang lebih praktis dan modern.</p>
                        </Info>
                    </Card>
                </List>
            </Container>
        </ProjectWorkContainer>
    )
}

export default ProjectWork
