import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { VacancyView } from '../../models/vacancy.model';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-dashboard',
  imports: [
    HeaderComponent,
    MatListModule,
    CommonModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss',
  animations: [
    trigger('expandCollapse', [
      state(
        'collapsed',
        style({
          height: '0',
          opacity: '0',
          padding: '0 16px',
          overflow: 'hidden',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          opacity: '1',
          overflow: 'hidden',
        })
      ),
      transition('collapsed <=> expanded', animate('300ms ease')),
    ]),
  ],
})
export class UserDashboardComponent {
  isExpanded: boolean = false;
  vacancies: VacancyView[] = [
    {
      title: 'Senior Frontend Developer',
      description:
        'We are looking for an experienced Frontend Developer to join our team. You will be responsible for building user interfaces using Angular, implementing responsive designs, and optimizing application performance.',
      requirements:
        '5+ years of experience with Angular, TypeScript, and modern web technologies. Experience with state management and performance optimization.',
      companyWebsite: 'https://techfusion.io',
      typeOfJob: 'Full-time',
      location: 'Remote',
      country: 'United States',
    },
    {
      title: 'UX/UI Designer',
      description:
        "Join our creative team to design intuitive and engaging user experiences across web and mobile platforms. You'll collaborate with product managers and developers to create wireframes, prototypes, and visual designs.",
      requirements:
        '3+ years of experience in UX/UI design. Proficiency in Figma or similar design tools. Portfolio demonstrating user-centered design approach.',
      companyWebsite: 'https://designcraft.co',
      typeOfJob: 'Full-time',
      location: 'New York',
      country: 'United States',
    },
    {
      title: 'DevOps Engineer',
      description:
        "Help us build and maintain our cloud infrastructure. You'll work on CI/CD pipelines, containerization, and infrastructure automation to support our growing platform.",
      requirements:
        'Experience with AWS, Docker, Kubernetes, and infrastructure as code. Knowledge of monitoring and logging solutions.',
      companyWebsite: 'https://cloudstack.tech',
      typeOfJob: 'Contract',
      location: 'Remote',
      country: 'Canada',
    },
    {
      title: 'Backend Developer (Node.js)',
      description:
        "Develop and maintain server-side applications using Node.js. You'll work on API development, database design, and integration with third-party services.",
      requirements:
        'Strong experience with Node.js, Express, and MongoDB. Knowledge of RESTful API design and authentication systems.',
      companyWebsite: 'https://nodeexperts.dev',
      typeOfJob: 'Full-time',
      location: 'Berlin',
      country: 'Germany',
    },
    {
      title: 'Data Scientist',
      description:
        "Apply machine learning and statistical techniques to extract insights from our data. You'll develop models to solve business problems and improve our product offerings.",
      requirements:
        'MS or PhD in Computer Science, Statistics, or related field. Experience with Python, R, and machine learning frameworks.',
      companyWebsite: 'https://datadrive.ai',
      typeOfJob: 'Full-time',
      location: 'San Francisco',
      country: 'United States',
    },
    {
      title: 'Mobile Developer (Flutter)',
      description:
        "Create cross-platform mobile applications using Flutter. You'll be responsible for implementing features, fixing bugs, and ensuring a smooth user experience across iOS and Android.",
      requirements:
        '2+ years of experience with Flutter and Dart. Understanding of mobile app architecture and state management.',
      companyWebsite: 'https://flutterwave.dev',
      typeOfJob: 'Part-time',
      location: 'Remote',
      country: 'United Kingdom',
    },
    {
      title: 'Product Manager',
      description:
        "Lead the development of new product features from conception to launch. You'll work closely with design, engineering, and marketing teams to deliver value to our customers.",
      requirements:
        '3+ years of product management experience in SaaS. Strong analytical skills and ability to prioritize features based on business impact.',
      companyWebsite: 'https://productify.co',
      typeOfJob: 'Full-time',
      location: 'Austin',
      country: 'United States',
    },
    {
      title: 'QA Engineer',
      description:
        "Ensure the quality of our software through manual and automated testing. You'll develop test plans, write test cases, and work with developers to fix issues.",
      requirements:
        'Experience with test automation frameworks like Selenium or Cypress. Knowledge of testing methodologies and bug tracking systems.',
      companyWebsite: 'https://qualityfirst.tech',
      typeOfJob: 'Full-time',
      location: 'Toronto',
      country: 'Canada',
    },
    {
      title: 'Blockchain Developer',
      description:
        "Develop and implement blockchain solutions for our financial services platform. You'll work on smart contracts, consensus mechanisms, and integration with existing systems.",
      requirements:
        'Experience with Ethereum, Solidity, and Web3.js. Understanding of blockchain fundamentals and cryptography.',
      companyWebsite: 'https://blockchainventures.io',
      typeOfJob: 'Contract',
      location: 'Singapore',
      country: 'Singapore',
    },
    {
      title: 'Technical Writer',
      description:
        "Create clear and concise documentation for our API and developer tools. You'll work with engineering teams to understand complex systems and explain them in simple terms.",
      requirements:
        'Strong writing skills and ability to understand technical concepts. Experience with documentation tools and markup languages.',
      companyWebsite: 'https://cleardocs.co',
      typeOfJob: 'Part-time',
      location: 'Remote',
      country: 'Australia',
    },
    {
      title: 'Security Engineer',
      description:
        "Protect our systems and data from security threats. You'll conduct security assessments, implement security controls, and respond to incidents.",
      requirements:
        'Knowledge of application security, network security, and secure coding practices. Experience with security tools and frameworks.',
      companyWebsite: 'https://securestack.io',
      typeOfJob: 'Full-time',
      location: 'London',
      country: 'United Kingdom',
    },
    {
      title: 'Full Stack Developer',
      description:
        "Build and maintain web applications from frontend to backend. You'll work with Angular, Node.js, and PostgreSQL to deliver features across the entire stack.",
      requirements:
        'Experience with both frontend and backend technologies. Knowledge of RESTful API design and database optimization.',
      companyWebsite: 'https://fullstackforce.dev',
      typeOfJob: 'Full-time',
      location: 'Stockholm',
      country: 'Sweden',
    },
    {
      title: 'Machine Learning Engineer',
      description:
        "Develop and deploy machine learning models to production. You'll work on data preprocessing, model training, and integration with our platform.",
      requirements:
        'Strong background in machine learning and deep learning. Experience with TensorFlow or PyTorch and MLOps practices.',
      companyWebsite: 'https://mlengine.ai',
      typeOfJob: 'Full-time',
      location: 'Paris',
      country: 'France',
    },
    {
      title: 'Cloud Architect',
      description:
        "Design and implement cloud-based solutions for our enterprise clients. You'll work on multi-cloud strategies, migration plans, and cost optimization.",
      requirements:
        'Experience with AWS, Azure, or GCP at an architectural level. Knowledge of cloud security and compliance.',
      companyWebsite: 'https://cloudarchitects.pro',
      typeOfJob: 'Contract',
      location: 'Remote',
      country: 'Netherlands',
    },
    {
      title: 'AR/VR Developer',
      description:
        "Create immersive augmented and virtual reality experiences for our entertainment platform. You'll work with Unity, ARKit, and ARCore to build next-generation applications.",
      requirements:
        'Experience with Unity3D and AR/VR development frameworks. Strong 3D math skills and understanding of spatial computing.',
      companyWebsite: 'https://immersivetech.io',
      typeOfJob: 'Full-time',
      location: 'Los Angeles',
      country: 'United States',
    },
  ];
  selectedVacancy: VacancyView | undefined;
  experienceLevels: string[] = ['Entry Level', 'Mid Level', 'Senior', 'Lead'];
  jobTypes: string[] = ['Full-time', 'Part-time', 'Contract', 'Freelance'];
  locations: string[] = ['Remote', 'Office', 'Hybrid'];

  minSalary = 0;
  maxSalary = 999999;
  salaryRange = [0, 200000];

  onVacancySelect(vacancy: any): void {
    this.selectedVacancy = vacancy;
    console.log('Selected vacancy:', vacancy);
  }

  onSalaryInputChange(index: number) {
    if (index === 0 && this.salaryRange[0] > this.salaryRange[1]) {
      this.salaryRange[0] = this.salaryRange[1];
    } else if (index === 1 && this.salaryRange[1] < this.salaryRange[0]) {
      this.salaryRange[1] = this.salaryRange[0];
    }
  }

  apply(): void {}

  toggleFilter(): void {
    this.isExpanded = !this.isExpanded;
  }
}
