import { cn } from '../../utils/cn.js';

export default function Container({ as: Tag = 'div', className, wide = false, children, ...rest }) {
  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-12', wide ? 'max-w-[1600px]' : 'max-w-[1360px]', className)} {...rest}>
      {children}
    </Tag>
  );
}
