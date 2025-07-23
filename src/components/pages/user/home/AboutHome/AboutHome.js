import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutHome.module.scss';
import images from '@/constants/static/images';
import Button from '@/components/common/Button/Button';
import {ROUTES} from '@/constants/config';

const AboutHome = () => {
	return (
		<section className={styles.aboutContainer}>
			<div className={styles.aboutContent}>
				<div className={styles.aboutText} data-aos='fade-right'>
					<h2>
						✨ Giới thiệu về <span>Hg Shop</span>
					</h2>
					<p>
						Hg Shop là địa chỉ uy tín chuyên cung cấp áo đá bóng chất lượng cao, đáp ứng mọi nhu cầu từ cá nhân, đội nhóm đến
						câu lạc bộ. Chúng tôi mang đến những mẫu áo đấu đa dạng, từ áo đấu CLB, đội tuyển quốc gia đến áo không logo dành
						cho thiết kế theo yêu cầu.
					</p>
					<p>
						Đến với Hg Shop, bạn không chỉ mua áo đá bóng mà còn khẳng định phong cách và niềm đam mê sân cỏ. Hãy cùng Hg Shop
						cháy hết mình với đam mê bóng đá! ⚡⚽
					</p>
					<Link href={ROUTES.About}>
						<Button type='submit' className={styles.learnMore}>
							Về chúng tôi
						</Button>
					</Link>
				</div>
				<div className={styles.aboutImage} data-aos='fade-left'>
					<Image src={images.about_home} alt='Về chúng tôi' width={500} height={350} className={styles.image} />
				</div>
			</div>
		</section>
	);
};

export default AboutHome;
