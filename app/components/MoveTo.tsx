"use client";

import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

interface AuthorRowInstance {
	author: string;
	avatar?: string;
	fallback: string;
	className?: string;
}

interface ArticleHeaderInstance extends AuthorRowInstance {
	title: string;
	date: string;
	children: React.ReactNode;
	className?: string;
}

export function ArticleHeader( { author, avatar, fallback, 
								title, date, children, className } : ArticleHeaderInstance ) {
	return (
		<main id="article-heading" className={cn(className)}>
			<div className='text-4xl md:text-7xl font-bolder sm:max-w-[60%] my-1'>
				{title}
			</div>
			<div id="article-date my-2">
				<span className='text-lg'>Published on: {date}</span>
			</div>
			<AuthorRow
				author={author}
				avatar={avatar}
				fallback={fallback}
				className='my-4'
			/>
			<div id='article-desc' className='w-auto lg:w-3/4 my-2'>
				{children}
			</div>
			<Separator />
		</main>
	);
}

const AuthorRow = ( {author, avatar, fallback, className}: AuthorRowInstance) => (
	<div className={cn(className, 'flex flex-wrap items-center p-1 gap-2')}>
		<Avatar className='mr-1'>
			<AvatarImage src={avatar} />
			<AvatarFallback>{fallback}</AvatarFallback>
		</Avatar>
		<span className='font-semibold text-center'>{author}</span>
		<div className='flex items-center flex-wrap gap-2'>
			<Badge variant="destructive">Student</Badge>
			<Badge variant="secondary">Hydrology</Badge>
		</div>
	</div>
)
