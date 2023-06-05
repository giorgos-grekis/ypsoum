/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image'

type ImageWithStateProps = ImageProps

export const WdImage = (props: ImageWithStateProps) =>
          <Image
            sizes={'100vw'}
            {...props}
            style={{
              objectFit: 'cover',
              maxWidth: '100%',
              height: 'auto',
              ...(props.height ? {maxHeight: props.height} : {}),
              ...props.style
            }}
          />